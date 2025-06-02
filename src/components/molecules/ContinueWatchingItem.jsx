const ContinueWatchingItem = ({ src, title, age, progress = 0 }) => {
  return (
    <div className="watch-item">
      <div className="watch-thumbnail">
        <img src={src} alt={title} />
        <div className="play-icon">▶</div>
        <div className="dots">
          {[0, 1, 2].map((_, i) => <div key={i} className="dot" />)}
        </div>
        <div className="watch-hover"></div>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="watch-info">
        <div className="title">{title}</div>
        <div className="age">{age}</div>
      </div>
    </div>
  );
};

export default ContinueWatchingItem;
