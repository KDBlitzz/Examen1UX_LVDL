const miniatura = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="thumbnail"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  );
};

export default miniatura;