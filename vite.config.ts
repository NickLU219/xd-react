import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import theme from "./antd.theme"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: theme,
            },
        },
    },
})
