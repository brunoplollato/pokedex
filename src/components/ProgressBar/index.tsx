import { ProgressBarType } from "../../types/global";

const ProgressBar = ({
  color,
  size
}: ProgressBarType) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
      <div className={`bg-${color}-600 text-${color}-100 h-4 text-xs text-center p-0.5 leading-none rounded-full`} style={{ width: `${(size * 100) / 255}%` }}>{ size }</div>
    </div>
  )
}

export default ProgressBar;