import React from 'react';

interface LoadingSpinnerProps {
  size?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 128 }) => {
  const fontSize = size / 8;

  return (
    <div className="loading-spinner">
			<svg className="pl" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="hsl(100,90%,55%)" />
					<stop offset="100%" stopColor="hsl(160,90%,55%)" />
          </linearGradient>
        </defs>
        <circle className="pl__ring" r="56" cx="64" cy="64" fill="none" stroke="hsla(0,10%,10%,0.1)" strokeWidth="16" strokeLinecap="round" />
        <path className="pl__worm" d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z" fill="none" stroke="url(#pl-grad)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="44 1111" strokeDashoffset="10" />
      </svg>
      <style jsx>{`
        .loading-spinner {
          --hue: 223;
          --bg: hsl(var(--hue),10%,90%);
          --fg: hsl(var(--hue),10%,10%);
          font-size: ${fontSize}px;
          color: var(--fg);
          font: 1em/1.5 sans-serif;
          height: ${size}px;
          width: ${size}px;
          display: grid;
          place-items: center;
          transition: background-color 0.3s;
        }
        .pl {
          width: 100%;
          height: 100%;
        }
					.pl,
        .pl__worm {
          animation-duration: 3s;
          animation-iteration-count: infinite;
        }
        .pl {
          animation-name: bump;
          animation-timing-function: linear;
          width: 100%;
          height: 100%;
        }
        .pl__ring {
          stroke: hsla(var(--hue),10%,10%,0.1);
          transition: stroke 0.3s;
        }
        .pl__worm {
          animation-name: worm;
          animation-timing-function: cubic-bezier(0.42,0.17,0.75,0.83);
        }
        @media (prefers-color-scheme: dark) {
          .loading-spinner {
            --bg: hsl(var(--hue),10%,10%);
            --fg: hsl(var(--hue),10%,90%);
          }
          .pl__ring {
            stroke: hsla(var(--hue),10%,90%,0.7);
          }
        }
        @keyframes bump {
          from, 42%, 46%, 51%, 55%, 59%, 63%, 67%, 71%, 74%, 78%, 81%, 85%, 88%, 92%, to { transform: translate(0,0); }
          44% { transform: translate(1.33%,6.75%); }
          53% { transform: translate(-16.67%,-0.54%); }
          61% { transform: translate(3.66%,-2.46%); }
          69% { transform: translate(-0.59%,15.27%); }
          76% { transform: translate(-1.92%,-4.68%); }
          83% { transform: translate(9.38%,0.96%); }
          90% { transform: translate(-4.55%,1.98%); }
        }
        @keyframes worm {
          from { stroke-dashoffset: 10; }
          25% { stroke-dashoffset: 295; }
          to { stroke-dashoffset: 1165; }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;