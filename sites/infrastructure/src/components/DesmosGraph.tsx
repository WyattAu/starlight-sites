import React, { useEffect, useRef } from 'react';

const embedContainer: React.CSSProperties = {
  width: '100%',
  margin: '1.5rem 0',
  overflow: 'hidden',
  border: '2px solid var(--ifm-color-emphasis-300)',
};

const embedTitle: React.CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '0.65rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--ifm-color-primary)',
  padding: '0.5rem 0.75rem',
  borderBottom: '2px solid var(--ifm-color-emphasis-300)',
  backgroundColor: 'var(--ifm-background-surface-color)',
  margin: 0,
};

const embedResponsive: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 0,
  overflow: 'hidden',
};

const embedIframe: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 'none',
  display: 'block',
};

interface DesmosExpression {
  latex?: string;
  color?: string;
  hidden?: boolean;
  sliderBounds?: { min: number; max: number; step: number };
  label?: string;
}

interface DesmosGraphProps {
  expressions?: (string | DesmosExpression)[];
  calculatorUrl?: string;
  title?: string;
  width?: number;
  height?: number;
}

function parseExpression(input: string): DesmosExpression {
  const expr: DesmosExpression = { latex: input };

  const paramRegex = /\b([a-df-wz])\b/g;
  const params = new Set<string>();
  let match;

  while ((match = paramRegex.exec(input)) !== null) {
    params.add(match[1]);
  }
  params.delete('e');
  params.delete('i');

  if (params.size > 0) {
    expr.sliderBounds = { min: -10, max: 10, step: 0.1 };
  }

  return expr;
}

const DESMOS_COLORS = [
  '#c74440',
  '#2d70b3',
  '#388c46',
  '#6042a6',
  '#000000',
  '#cf0000',
  '#0060bf',
  '#289728',
  '#990099',
  '#ff6600',
  '#00b3b3',
  '#666666',
];

export const DesmosGraph: React.FC<DesmosGraphProps> = ({
  expressions = [],
  calculatorUrl,
  title = 'Desmos Graph',
  width = 800,
  height = 500,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<unknown>(null);
  const aspectPadding = (height / width) * 100;

  if (calculatorUrl) {
    return (
      <div style={embedContainer}>
        <p style={embedTitle}>{title}</p>
        <div style={{ ...embedResponsive, paddingBottom: `${aspectPadding}%` }}>
          <iframe
            style={embedIframe}
            src={calculatorUrl}
            title={title}
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (!containerRef.current || expressions.length === 0) {
      return;
    }

    let destroyed = false;

    const script = document.createElement('script');

    script.src =
      'https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
    script.async = true;

    script.onload = () => {
      if (destroyed || !containerRef.current) {
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Desmos = (window as any).Desmos;

      if (!Desmos) {
        return;
      }

      const calculator = Desmos.GraphingCalculator(containerRef.current, {
        keypad: false,
        expressions: false,
        settingsMenu: false,
        zoomButtons: false,
        expressionsTopbar: false,
        pointsOfInterest: true,
        trace: true,
      });

      calculatorRef.current = calculator;

      const parsedExpressions = expressions.map((expr) =>
        typeof expr === 'string' ? parseExpression(expr) : expr,
      );

      parsedExpressions.forEach((expr, index) => {
        const desmosExpr: Record<string, unknown> = {
          latex: expr.latex,
          color: expr.color || DESMOS_COLORS[index % DESMOS_COLORS.length],
          hidden: expr.hidden || false,
        };

        if (expr.sliderBounds) {
          desmosExpr.sliderBounds = expr.sliderBounds;
        }
        if (expr.label) {
          desmosExpr.label = expr.label;
        }

        calculator.setExpression(desmosExpr);
      });

      const paramRegex = /\b([a-df-wz])\b/g;
      const addedParams = new Set<string>();

      expressions.forEach((expr) => {
        const input = typeof expr === 'string' ? expr : expr.latex || '';
        let paramMatch;

        while ((paramMatch = paramRegex.exec(input)) !== null) {
          const param = paramMatch[1];

          if (!addedParams.has(param) && param !== 'e' && param !== 'i') {
            addedParams.add(param);
            calculator.setExpression({
              latex: param,
              sliderBounds: { min: -10, max: 10, step: 0.1 },
            });
          }
        }
      });
    };

    containerRef.current.appendChild(script);

    return () => {
      destroyed = true;
      if (calculatorRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (calculatorRef.current as any).destroy();
        calculatorRef.current = null;
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [expressions]);

  if (expressions.length === 0 && !calculatorUrl) {
    return null;
  }

  return (
    <div style={embedContainer}>
      <p style={embedTitle}>{title}</p>
      <div
        ref={containerRef}
        style={{
          ...embedResponsive,
          paddingBottom: `${aspectPadding}%`,
          position: 'relative',
        }}
        role="img"
        aria-label={title}
      />
    </div>
  );
};
