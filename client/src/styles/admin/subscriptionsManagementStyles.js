import { StyleSheet } from 'react-native';
import { theme } from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 12,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerText: {
    flex: 1,
    color: theme.colors.surface,
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 16,
  },
  subscriptionCard: {
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: theme.colors.surface,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.accent,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.backdrop,
    paddingHorizontal: 16,
  },
  modalContent: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  saveButton: {
    marginTop: 16,
    backgroundColor: theme.colors.primary,
  },
  cancelButton: {
    marginTop: 8,
    borderColor: theme.colors.primary,
  },
  successSnackbar: {
    backgroundColor: theme.colors.primary,
  },
  errorSnackbar: {
    backgroundColor: theme.colors.error,
  },
  snackbar: {
    zIndex: 10000,  // High zIndex to ensure it stays on top
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,  // Increase elevation for Android
  },
});

export default styles;
