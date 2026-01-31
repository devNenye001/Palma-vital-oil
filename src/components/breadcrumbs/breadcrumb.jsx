import "./breadcrumb.css";

const Breadcrumb = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <div className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="breadcrumb-item">
              {isLast ? (
                <span className="breadcrumb-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a className="breadcrumb-link" href={item.href || "#"}>
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumb;
