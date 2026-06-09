import React from 'react';

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

interface PhetSimulationProps {
  simulationId: string;
  title?: string;
  width?: number;
  height?: number;
}

export const PhetSimulation: React.FC<PhetSimulationProps> = ({
  simulationId,
  title = 'PhET Simulation',
  width = 800,
  height = 600,
}) => {
  const src = `https://phet.colorado.edu/sims/html/${simulationId}/latest/${simulationId}_en.html`;

  const aspectPadding = (height / width) * 100;

  return (
    <div style={embedContainer}>
      <p style={embedTitle}>{title}</p>
      <div style={{ ...embedResponsive, paddingBottom: `${aspectPadding}%` }}>
        <iframe
          style={embedIframe}
          src={src}
          title={title}
          sandbox="allow-scripts allow-same-origin allow-popups"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};
