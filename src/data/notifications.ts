import user1 from 'assets/images/avatar-mark-webber.webp';
import user2 from 'assets/images/avatar-angela-gray.webp';
import user3 from 'assets/images/avatar-jacob-thompson.webp';
import user4 from 'assets/images/avatar-rizky-hassanuddin.webp';
import user5 from 'assets/images/avatar-kimberly-smith.webp';
import user6 from 'assets/images/avatar-nathan-peterson.webp';
import user7 from 'assets/images/avatar-anna-kim.webp';

import post1 from 'assets/images/image-chess.webp';

const data = [
	{
		id: '1',
		user: {
			username: 'Mark Webber',
			profilePic: user1,
		},
		type: {
			name: 'reaction',
			text: 'reacted to your recent post',
		},
		target: {
			text: 'My first tournament today',
			link: '',
		},
		status: 'unread',
		at: '1m ago',
	},
	{
		id: '2',
		user: {
			username: 'Angela Gray',
			profilePic: user2,
		},
		type: {
			name: 'follow',
			text: 'followed you',
		},
		status: 'unread',
		at: '5m ago',
	},
	{
		id: '3',
		user: {
			username: 'Jacob Thompson',
			profilePic: user3,
		},
		type: {
			name: 'join/left',
			text: 'jhas joined your group',
		},
		target: {
			text: 'Chess Club',
			link: '',
		},
		status: 'unread',
		at: '1 day ago',
	},
	{
		id: '4',
		user: {
			username: 'Rizky Hassanuddin',
			profilePic: user4,
		},
		type: {
			name: 'message',
			text: 'sent you a private message',
		},
		target: {
			text: `Hello, thansk for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`,
			link: '',
		},
		status: 'read',
		at: '5 days ago',
	},
	{
		id: '5',
		user: {
			username: 'Kimberly Smith',
			profilePic: user5,
		},
		type: {
			name: 'comment',
			text: 'commented on your picture',
		},
		target: {
			text: post1,
			link: '',
		},
		status: 'read',
		at: '1 week ago',
	},
	{
		id: '6',
		user: {
			username: 'Nathan Peterson',
			profilePic: user6,
		},
		type: {
			name: 'reaction',
			text: 'reacted to your recent post',
		},
		target: {
			text: `5 end-game strategies to increase your win rate`,
			link: '',
		},
		status: 'read',
		at: '2 weeks ago',
	},
	{
		id: '7',
		user: {
			username: 'Anna Kim',
			profilePic: user7,
		},
		type: {
			name: 'join/left',
			text: 'left the group',
		},
		target: {
			text: `Chess Club`,
			link: '',
		},
		status: 'read',
		at: '2 weeks ago',
	},
];

export default data;
