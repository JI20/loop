const SocialIcon = (props) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        enableBackground: "new 0 0 122.88 86.64",
      }}
      viewBox="0 0 122.88 86.64"
      {...props}
    >
      <path
        fill={color}
        d="M95.05 41.89c-1.03.54-2.07 1.06-3.11 1.59a.38.38 0 0 1-.51-.17l-1.51-3.04c-2.42-4.93-4.24-8.65-9.89-10.72l-.71-.24c-1.61-.5-3.24-.72-4.83-.65-1.59.06-3.13.41-4.54 1.03-1.43.63-2.73 1.54-3.83 2.74-1.04 1.13-1.9 2.52-2.5 4.16-.08.22-.16.45-.23.68-1.51 4.84-.7 10.18 1.14 15.51 1.85 5.37 4.74 10.74 7.36 15.61l.02.03c1.01 1.87 1.98 3.67 2.88 5.47l3.6 7.16 9.32-4.43 2.47-1.15 3.18-1.45c3.06-1.39 6.42-2.92 9.56-4.49 1.18-.59 2.36-1.21 3.51-1.83 1.13-.62 2.21-1.24 3.23-1.87.99-.61 1.91-1.23 2.74-1.84l.01-.01c.82-.61 1.55-1.21 2.15-1.79.97-.94 1.76-1.95 2.36-3 .64-1.1 1.08-2.25 1.34-3.41.25-1.1.34-2.22.3-3.33a13.48 13.48 0 0 0-.6-3.39 14.963 14.963 0 0 0-3.53-5.95c-.96-.99-2.06-1.85-3.28-2.54-1.16-.66-2.44-1.17-3.79-1.47-4.77-1.08-8.16.67-12.28 2.79h-.03zM42.17 20.82c-.26.66-.52 1.32-.85 2.12l-.9 2.21-2.21-.91c-.65-.27-1.32-.55-1.96-.83-6.85-2.89-12.01-5.07-19.69-2.14-.3.11-.62.25-.94.39-4.22 1.85-7.53 4.99-9.35 8.82-1.78 3.78-2.1 8.26-.34 12.87.1.29.23.59.37.91 5.53 12.61 22.21 18.91 36.03 24.13 2.67 1.01 5.22 1.97 7.71 2.99l10.33 4.23 4.72-10.81c-4.68-9.14-8.78-19.37-5.83-28.83l.29-.87c.81-2.22 1.98-4.11 3.4-5.65 1.5-1.63 3.29-2.88 5.26-3.74a16.8 16.8 0 0 1 6.04-1.38c2.04-.09 4.12.17 6.16.78.03-.24.05-.47.07-.7.33-3.79-.43-7.14-1.94-9.96-1.49-2.78-3.72-5.05-6.36-6.69-2.68-1.67-5.78-2.69-8.97-2.97-3.67-.29-7.47.38-10.9 2.21-5.9 3.18-7.81 7.98-10.14 13.82zm25.75 49.35-4.14 9.48-.93 2.13-2.15-.88-12.48-5.11c-2.28-.93-4.89-1.92-7.59-2.94C25.98 67.3 8.29 60.62 1.94 46.17c-.15-.35-.3-.73-.45-1.11-2.25-5.91-1.83-11.71.49-16.61 2.3-4.85 6.47-8.81 11.73-11.13.36-.16.74-.32 1.15-.47 9.37-3.57 15.25-1.18 22.96 2.07 2.65-6.67 4.88-12.16 12.26-16.11C54.34.53 59.06-.31 63.62.09c3.94.34 7.76 1.6 11.06 3.65 3.34 2.07 6.16 4.94 8.05 8.48 1.92 3.59 2.89 7.84 2.47 12.61-.06.72-.16 1.46-.29 2.22a16.23 16.23 0 0 1 4.35 3.63c1.72 2.04 2.93 4.42 4.26 7.12 2.28-1.18 4.39-2.23 6.67-2.85 2.41-.65 4.99-.81 8.12-.1 1.77.4 3.44 1.06 4.95 1.93 1.58.9 3.01 2.02 4.25 3.31 1.05 1.09 1.97 2.29 2.74 3.58.77 1.29 1.38 2.66 1.82 4.09.45 1.46.72 2.98.79 4.51.07 1.48-.06 2.98-.39 4.45-.35 1.56-.95 3.1-1.79 4.57-.8 1.4-1.84 2.74-3.13 3.98-.74.72-1.6 1.43-2.55 2.13-.94.7-1.98 1.39-3.08 2.07-1.08.67-2.22 1.33-3.41 1.98-1.17.64-2.4 1.28-3.66 1.91-1.74.88-3.48 1.71-5.18 2.5-1.68.78-3.39 1.56-5.01 2.3-1.71.78-3.4 1.55-5.1 2.35l-12.8 6.08c-.19.09-.41.01-.5-.18l-5.33-10.59c-.41-.82-.87-1.69-1.35-2.6l-1.52-2.83-.14-.22z"
      />
    </svg>
  );
};
export default SocialIcon;
