import { useMemo, useState } from 'react';
import notifications from 'data/notifications';

function App() {
	const [data, setData] = useState(notifications);

	const unread = useMemo(() => {
		return data.filter(e => e.status === 'unread').length;
	}, [data]);

	const clearUnread = () =>
		setData(prev => prev.map(e => ({ ...e, status: 'read' })));

	return (
		<main className='font-main text-grayish-blue-400 w-full max-w-3xl mx-auto px-3 md:px-4 bg-white md:rounded-2xl'>
			<header className='flex justify-between py-4'>
				<div className='flex items-center gap-2'>
					<h1 className='font-bold text-xl'>Notifications</h1>
					{unread > 0 && (
						<span className='text-white bg-blue px-3 rounded'>{unread}</span>
					)}
				</div>

				<button
					className='text-grayish-blue-300 hover:text-blue'
					type='button'
					title='mark all as read'
					onClick={clearUnread}>
					Mark all as read
				</button>
			</header>

			<ul className='pb-4 pt-1 flex flex-col gap-5 w-full'>
				{data.map(item => {
					let liStyles = 'w-full p-3 rounded-lg flex gap-3';
					let pbStyles = 'ml-1 cursor-pointer';

					if (item.status === 'unread') {
						liStyles += ' bg-grayish-blue-50';
					}

					if (item.type.name === 'reaction') {
						pbStyles += ' text-grayish-blue-300';
					}

					if (item.type.name === 'join/left') {
						pbStyles += ' text-blue';
					}

					return (
						<li key={item.id} className={liStyles}>
							<img
								src={item.user.profilePic}
								alt='profile'
								className='w-[40px] h-[40px] rounded-full'
							/>

							<div className='grow'>
								<p className='leading-5 mb-1'>
									<b className='cursor-pointer hover:text-blue'>
										{item.user.username}
									</b>
									&nbsp;
									<span className='ml-1 text-grayish-blue-300'>
										{item.type.text}
									</span>
									{(item.type.name === 'reaction' ||
										item.type.name === 'join/left') && (
										<>
											&nbsp;
											<b className={pbStyles}>{item.target?.text}</b>
										</>
									)}
									{item.status === 'unread' && (
										<>
											&nbsp;
											<span className='ml-1 inline-block w-2 h-2 rounded-full bg-red' />
										</>
									)}
								</p>
								<span className='text-grayish-blue'>{item.at}</span>

								{item.type.name === 'message' && (
									<p className='mt-2 border border-grayish-blue-200 rounded p-5 text-sm text-grayish-blue-300 cursor-pointer leading-tight hover:bg-grayish-blue-100'>
										{item.target?.text}
									</p>
								)}
							</div>

							{item.type.name === 'comment' && (
								<img
									src={item.target?.text}
									alt='post'
									className='w-10 h-10 cursor-pointer rounded-lg'
								/>
							)}
						</li>
					);
				})}
			</ul>
		</main>
	);
}

export default App;
