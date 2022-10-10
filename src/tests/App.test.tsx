import { render, screen } from '@testing-library/react';
import App from 'App';
import data from 'data/notifications';

test('renders learn react link', () => {
	render(<App />);
	const h1Element = screen.getByText(/Notifications/i);
	expect(h1Element).toBeInTheDocument();
});

test('renders correct number of unread notifications', () => {
	render(<App />);
	const unreads = data.filter(e => e.status === 'unread').length.toString();
	const headingEl = screen.getByTitle('unread-badge');
	expect(headingEl).toContainHTML(unreads);
});

test('data rendered correctly', () => {
	render(<App />);
	data.forEach(({ user }) => {
		const itemEl = screen.getByText(user.username);
		expect(itemEl).toBeInTheDocument();
	});
});
