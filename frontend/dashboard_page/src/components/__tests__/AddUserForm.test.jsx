import { render, screen, fireEvent } from '@testing-library/react';
import AddUserForm from '../AddUserForm';
import { addDoc } from 'firebase/firestore';

// Mock Firebase
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  addDoc: jest.fn()
}));

describe('AddUserForm', () => {
  const mockOnUserAdded = jest.fn();

  beforeEach(() => {
    render(<AddUserForm onUserAdded={mockOnUserAdded} />);
  });

  test('renders form fields', () => {
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument(); // role selector
  });

  test('submits form with correct data', async () => {
    const userData = {
      username: 'testuser',
      password: 'testpass',
      role: 'consumer'
    };

    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: userData.username }
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: userData.password }
    });
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: userData.role }
    });

    fireEvent.click(screen.getByText('Add User'));

    expect(addDoc).toHaveBeenCalled();
    expect(mockOnUserAdded).toHaveBeenCalled();
  });
});
