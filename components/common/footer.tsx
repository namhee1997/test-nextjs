import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Icon, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'

export function Footer() {

	const socialLink = [
		{
			icon: Facebook, url: 'https://google.com'
		},
		{
			icon: Instagram, url: 'https://google.com'
		},
		{
			icon: Twitter, url: 'https://google.com'
		},
		{
			icon: LinkedIn, url: 'https://google.com'
		}
	]

	return (
		<Box component="footer" py={2} textAlign="center">
			<Stack direction='row' justifyContent='center' >
				{
					socialLink.map((e, i) =>
						<Box
							key={i}
							component='a'
							p={2}
							href={e.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							<Icon component={e.icon} sx={{ fontSize: 48 }} />
						</Box>
					)
				}
			</Stack>
			<Typography>Copyright 2022. All rights reseved</Typography>
		</Box>
	)
}
