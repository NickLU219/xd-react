import { useState } from "react"
import "./App.less"
import { Button } from "antd"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <Button
                        type="primary"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        count is: {count}
                    </Button>
                </p>
            </header>
        </div>
    )
}

export default App
