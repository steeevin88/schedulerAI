"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function NavBar() {
	const [username, setUsername] = useState<string | null>(null);

	useEffect(() => {
		// Check if 'document' is available (client-side) before accessing it
		if (typeof document !== 'undefined') {
		  const usernameCookie = document.cookie.match('(^|;)\\s?username\\s?=\\s?([^;]+)');
		  const usernameFromCookie = usernameCookie ? usernameCookie[2] : null;
		  setUsername(usernameFromCookie);
		}
	  }, []);

	function signOut() {
		//delete cookies
		document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		window.location.href = "../login"
	}

	return(
		<header className="sm:px-16 px-8 py-4 w-full bg-yellow-200">
			<nav className="flex flex-row justify-between w-full">
				<Link href={'/'}>
					<Image 
						src="/../assets/house.png"
						width={50}
						height={50}
						alt="Home"
					/>
				</Link>
				<ul className="flex-1 flex justify-center items-center gap-16">
					<Link href='/'>
						<li>CALENDAR</li>
					</Link>
					<Link href={'../friends'}>
						<li>FRIENDS</li>
					</Link>
					<Link href='../plan'>
						<li>PLAN</li>
					</Link>
				</ul>
				<div className="flex flex-row justify-between">
					{username ?
					(<button type="button" className="text-black border dark:shadow-lg bg-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={signOut}>Sign Out</button>) :
					(
					<>
						<Link href="../login" rel="noopener noreferrer">
							<button type="button" className="text-black border dark:shadow-lg bg-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
								Login
							</button>
						</Link>
						<Link href="../signup" rel="noopener noreferrer">
							<button type="button" className="text-black border dark:shadow-lg bg-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
								Sign Up
							</button>
						</Link>
					</>
					)}
				</div>
			</nav>
		</header>
	);
}

export default NavBar;