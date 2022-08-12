import { motion } from "framer-motion";
import { ProgressBarType } from "../../types/global";

export default function ProgressBar({
  color,
  size
}: ProgressBarType) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
      <motion.div
        initial={{ width: 0, fontSize: 0 }}
        animate={{ width: `${(size * 100) / 255}%`, fontSize: "0.75rem" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className={`bg-${color}-600 h-4 text-xs text-center text-white p-0.5 leading-none rounded-full`}>        

        {size}
        
      </motion.div>
    </div>
  )
}