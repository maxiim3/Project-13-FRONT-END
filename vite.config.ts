import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
								plugins: [react()],
						/*		resolve: {
									types: [
										{
											find: /^~(.*)$/,
											replacement: "node_modules/$1",
										},
									],
								},
								server: {
									hmr: {
										overlay: false,
									}
								}*/
							})
