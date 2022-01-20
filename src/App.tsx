import { useState } from "react"
import "./App.less"
import { Button, Layout } from "antd"

import HeaderBar from "@/pages/layout/headerBar"

const Sider = Layout.Sider
const Header = Layout.Header
const Content = Layout.Content
const Footer = Layout.Footer

function App() {
    const [count, setCount] = useState(0)

    return (
        <Layout style={{ height: "100%" }}>
            <Header>
                <HeaderBar></HeaderBar>
            </Header>
            <Layout>
                <Sider>left sidebar</Sider>
                <Content>
                    <p>
                        <Button
                            type="primary"
                            onClick={() => setCount((count) => count + 1)}
                        >
                            count is: {count}
                        </Button>
                    </p>
                </Content>
                <Sider>right sidebar</Sider>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
    )
}

export default App
