import Thumbnail from '../atoms/Miniatura';

const Card = ({ src, alt, rank, showRank = false }) => {
  return (
    <div className="card">
      {/* Ranking grande solo si showRank está activado */}
      {showRank && rank !== undefined && (
        <div className="ranking-number">{rank}</div>
      )}

      <Thumbnail src={src} alt={alt} />

      <div className="dots">
        {[0, 1, 2].map((_, i) => (
          <div key={i} className="dot" />
        ))}
      </div>

      <div className="card-hover"></div>
    </div>
  );
};

export default Card;