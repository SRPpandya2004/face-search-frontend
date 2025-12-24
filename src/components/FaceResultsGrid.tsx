import { motion } from "framer-motion";

export default function FaceResultsGrid({ results }: any) {
  if (!results.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {results.map((r, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-black/40 p-2 rounded-xl"
        >
          <img
            src={r.photo_url}
            alt="match"
            className="rounded-lg"
          />
          <p className="text-sm text-center text-gray-300 mt-2">
            Distance: {r.distance.toFixed(2)}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
