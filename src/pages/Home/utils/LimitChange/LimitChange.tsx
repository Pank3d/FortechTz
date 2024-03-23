import { LinmitProps } from "../../../../shared/type/type";


export const LimitChange:React.FC<LinmitProps> = ({value, onChange}) => {
  return (
    <div className="limitChange">
      <label htmlFor="limit">Items per page:</label>
      <select id="limit" value={value} onChange={onChange}>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
}
