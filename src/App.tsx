import { AnimatePresence, motion } from 'framer-motion'

const stacks = ['Vite', 'React', 'Tailwind', 'Framer Motion']

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Template</h1>
      <AnimatePresence>
        <motion.div
          className="max-w-40 flex flex-col gap-2 overflow-hidden p-2"
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
        >
          {stacks.map(stack => (
            <motion.span
              key={stack}
              className="bg-neutral-100 rounded-lg p-2"
              variants={{
                initial: { x: -300 },
                animate: {
                  x: 0,
                },
              }}
              transition={{
                type: 'spring',
                bounce: 0.2,
              }}
            >
              {stack}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
