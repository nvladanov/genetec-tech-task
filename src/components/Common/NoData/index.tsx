import { Inbox, SearchX } from 'lucide-react';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { NoDataType } from '../../../types';
import { NoDataContainer, NoDataMessage, NoDataTitle, PrimaryButton } from './styles';

interface NoDataProps {
    type: NoDataType;
    onClear?: () => void;
}

export const NoData = ({ type, onClear }: NoDataProps) => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <NoDataContainer>
            {type === NoDataType.EMPTY ? (
                <>
                    <Inbox
                        size={48}
                        strokeWidth={1}
                        color={theme?.colors?.muted}
                        style={{ marginBottom: '1rem', opacity: 0.5 }}
                    />
                    <NoDataTitle>{t('common.noData.emptyTitle')}</NoDataTitle>
                    <NoDataMessage>{t('common.noData.emptyMessage')}</NoDataMessage>
                </>
            ) : (
                <>
                    <SearchX
                        size={48}
                        strokeWidth={1}
                        color={theme?.colors?.muted}
                        style={{ marginBottom: '1rem', opacity: 0.5 }}
                    />
                    <NoDataTitle>{t('common.noData.filteredTitle')}</NoDataTitle>
                    <NoDataMessage>{t('common.noData.filteredMessage')}</NoDataMessage>
                    {onClear && (
                        <PrimaryButton onClick={onClear}>
                            {t('common.noData.clearFilters')}
                        </PrimaryButton>
                    )}
                </>
            )}
        </NoDataContainer>
    );
};
