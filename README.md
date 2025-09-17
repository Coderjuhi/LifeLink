# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






 {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-2 mt-4">
            Where Your Giving Goes: <br /> Transparency & Impact
          </h2>
          <p className="text-gray-500 mb-6">
            Ensuring every dollar contributes to real difference, here’s how your
            generosity is utilized to bring impact.
          </p>

          {/* /* Donut Section */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Legend */}
            <div className="space-y-3 w-full md:w-1/2">
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 square-full bg-green-700"></span>
                <span>37% Healthy Food</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 square-full bg-orange-400"></span>
                <span>29% Medicine</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 square-full bg-yellow-400"></span>
                <span>17% Pure Water</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 square-full bg-teal-500"></span>
                <span>13% Education</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 square-full bg-green-500"></span>
                <span>12% Feed the Poor</span>
              </div>
            </div>

            {/* Donut Chart (larger, broader, shifted right) */}
            <div className="w-72 h-72 rounded-full relative ml-auto">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: `conic-gradient(
          #2F855A 0% 37%,
          #ED8936 37% 66%,
          #ECC94B 66% 83%,
          #38B2AC 83% 96%,
          #48BB78 96% 100%
        )`
                }}
              ></div>
              {/* Inner white circle (smaller → makes donut ring thicker) */}
              <div className="absolute top-10 left-10 w-52 h-52 bg-gray-200 rounded-full">

              </div>
            </div>