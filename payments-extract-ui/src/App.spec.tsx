import { cleanup, render, screen } from "@testing-library/react"
import { describe, it, expect, afterEach } from "vitest"
import '@testing-library/jest-dom/vitest'

import App from "./App"
import { ExtractContext } from "@core/contexts/Extract"
import { paginnationMock } from "./testing/mocks/paginnation"
import { summaryMock } from "./testing/mocks/summary"
import { extrackMock } from "./testing/mocks/extract"
import { ColorModeContext } from "@core/contexts/Color"
import { ThemeProvider, createTheme } from "@mui/material"
import { ReactNode } from "react"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderAppWithContexts = (ui: ReactNode, {providerProps, ...renderOptions}: any) => {
    const theme = createTheme({
        palette: {
          mode: 'dark',
        },
    })
    
    return render(
        <ExtractContext.Provider {...providerProps}>
            <ColorModeContext.Provider value={{toggleColorMode: () => {}}}>
                <ThemeProvider theme={theme}>
                    {ui}
                </ThemeProvider>
            </ColorModeContext.Provider>,
        </ExtractContext.Provider>,
        renderOptions,
    )
}

describe("App component", () => {
    afterEach(() => {
        cleanup();
    });

    it("should render", () => {
        const providerProps = {
            value: {
                loading: false,
                extract: extrackMock,
                pagination: paginnationMock,
                summary: summaryMock,
                fetchExtract: () => {}
            }
        }

        const app = renderAppWithContexts(<App testMode={true}/>, {providerProps})

        expect(app).toBeDefined()
    })

    it("should reder loading", async () => {
        const providerProps = {
            value: {
                loading: true,
                extract: extrackMock,
                pagination: paginnationMock,
                summary: summaryMock,
                fetchExtract: () => {}
            }
        }

        const app = renderAppWithContexts(<App testMode={true}/>, {providerProps})

        const loading = app.getByRole('progressbar')

        expect(loading).toBeInTheDocument()
    })

    it("should reder titles", async () => {
        const providerProps = {
            value: {
                loading: false,
                extract: extrackMock,
                pagination: paginnationMock,
                summary: summaryMock,
                fetchExtract: () => {}
            }
        }

        renderAppWithContexts(<App testMode={true}/>, {providerProps})

        const summary = screen.getAllByText("Summary")
        const extract = screen.getAllByText("Extract")

        expect(summary.length).toBeGreaterThan(0);
        expect(extract.length).toBeGreaterThan(0);
    })
})
