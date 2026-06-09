import type { JSX } from 'solid-js';

const embedContainer: JSX.CSSProperties = {
  width: '100%',
  margin: '1.5rem 0',
  overflow: 'hidden',
  border: '2px solid var(--ifm-color-emphasis-300)',
};

const embedTitle: JSX.CSSProperties = {
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

const embedResponsive: JSX.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 0,
  overflow: 'hidden',
};

const embedIframe: JSX.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 'none',
  display: 'block',
};

interface PhetSimulationProps {
  simulationId: string;
  title?: string;
  width?: number;
  height?: number;
}

export default function PhetSimulation(props: PhetSimulationProps) {
  const simulationId = () => props.simulationId;
  const title = () => props.title ?? 'PhET Simulation';
  const width = () => props.width ?? 800;
  const height = () => props.height ?? 600;

  const src = () =>
    `https://phet.colorado.edu/sims/html/${simulationId()}/latest/${simulationId()}_en.html`;

  const aspectPadding = () => (height() / width()) * 100;

  return (
    <div style={embedContainer}>
      <p style={embedTitle}>{title()}</p>
      <div style={{ ...embedResponsive, 'padding-bottom': `${aspectPadding()}%` }}>
        <iframe
          style={embedIframe}
          src={src()}
          title={title()}
          sandbox="allow-scripts allow-same-origin allow-popups"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
