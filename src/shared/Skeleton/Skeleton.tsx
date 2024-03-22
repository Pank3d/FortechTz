import ContentLoader from "react-content-loader";

const GridLoader = () => (
  <div className="grid-loader">
    <ContentLoader
      speed={2}
      width={120}
      height={120}
      viewBox="0 0 120 120"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="grid-loader-item"
    >
      <rect x="0" y="0" rx="3" ry="3" width="120" height="120" />
    </ContentLoader>
  </div>
);

export default GridLoader;
