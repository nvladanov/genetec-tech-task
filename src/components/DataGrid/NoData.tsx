import { Inbox, SearchX } from 'lucide-react'
import { useTheme } from 'styled-components'
import { NoDataContainer, NoDataMessage, NoDataTitle, PrimaryButton } from './styles'

interface NoDataProps {
    type: 'empty' | 'filtered'
    onClear?: () => void
}

export const NoData = ({ type, onClear }: NoDataProps) => {
    const theme = useTheme()

    return (
        <NoDataContainer>
            {type === 'empty' ? (
                <>
                    <Inbox size={48} strokeWidth={1} color={theme?.colors?.muted} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                    <NoDataTitle>No Data Available</NoDataTitle>
                    <NoDataMessage>There are no records to display at this time.</NoDataMessage>
                </>
            ) : (
                <>
                    <SearchX size={48} strokeWidth={1} color={theme?.colors?.muted} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                    <NoDataTitle>No Results Found</NoDataTitle>
                    <NoDataMessage>
                        No records match your current filters. Try adjusting them or clear all filters.
                    </NoDataMessage>
                    {onClear && (
                        <PrimaryButton onClick={onClear}>
                            Clear All Filters
                        </PrimaryButton>
                    )}
                </>
            )}
        </NoDataContainer>
    )
}
