import { cleanup, render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vitest } from "vitest"
import '@testing-library/jest-dom/vitest'

import { ExtractContext } from "@core/contexts/Extract"
import { paginnationMock } from "../../testing/mocks/paginnation"
import { summaryMock } from "../../testing/mocks/summary"
import { extrackMock } from "../../testing/mocks/extract"
import { ColorModeContext } from "@core/contexts/Color"
import { ThemeProvider, createTheme } from "@mui/material"
import { ReactNode } from "react"
import { ExtractList } from "."


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

describe("Extract component", () => {
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

        const extract = renderAppWithContexts(<ExtractList />, {providerProps})

        expect(extract).toBeDefined()
    })

    it("should have lists", () => {
        const providerProps = {
            value: {
                loading: false,
                extract: extrackMock,
                pagination: paginnationMock,
                summary: summaryMock,
                fetchExtract: () => {}
            }
        }

        const extract = renderAppWithContexts(<ExtractList />, {providerProps})

        const lines = extract.getAllByRole('row')

        expect(lines.length).toBeGreaterThan(0)
    })

    it("should call fetch on click page button", async () => {
        const providerProps = {
            value: {
                loading: false,
                extract: extrackMock,
                pagination: paginnationMock,
                summary: summaryMock,
                fetchExtract: vitest.fn()
            }
        }

        const extract = renderAppWithContexts(<ExtractList />, {providerProps})
        
        const buttons = extract.getAllByRole('button')
        const goToPreviousButton = buttons[0]

        await userEvent.click(goToPreviousButton)

        expect(providerProps.value.fetchExtract).toHaveBeenCalled()
    })
})
