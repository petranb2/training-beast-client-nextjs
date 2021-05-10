import { useSnackbar } from "notistack";
/**
 * Custom SnackBar 
 * @returns TBCSnackBarInterface
 */
export const useTBCSnackBar = (): TBCSnackBarInterface => {

    const { enqueueSnackbar } = useSnackbar();

    function showError(message: string): void {
        enqueueSnackbar(message, { variant: 'error' });
    }
    function showInfo(message: string): void {
        enqueueSnackbar(message, { variant: 'info' });
    }
    function showSuccess(message: string): void {
        enqueueSnackbar(message);
    }

    return {
        showError,
        showInfo,
        showSuccess
    }
}

interface TBCSnackBarInterface {
    showError(message: string): void
    showInfo(message: string): void
    showSuccess(message: string): void
}

