import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoList from '@components/TodoList';

describe('TodoList', () => {
  test('renders todo item', () => {
    const { getByText } = render(<TodoList />);
    const todoItem = getByText('Buy milk');
    expect(todoItem).toBeDefined();
  });

  test('adds new todo item', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    const input = getByPlaceholderText('Add a todo item') as ReturnType<
      typeof getByPlaceholderText
    >;
    const addButton = getByText('Add') as ReturnType<typeof getByText>;
    fireEvent.changeText(input, 'Buy eggs');
    fireEvent.press(addButton);
    const newTodoItem = getByText('Buy eggs');
    expect(newTodoItem).toBeDefined();
  });
});
