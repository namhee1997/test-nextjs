import { Seo } from '@/components/common'
import { HeroSection, RecentPosts, FeatureWorks } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/system'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<Seo
				data={{
					title: 'Learn NextJs By NamHee',
					description: 'description Namhee',
					url: 'https://namhe-webshop.vercel.app/',
					thumbnaiUrl: 'https://res.cloudinary.com/namhee/image/upload/v1657269852/el9qo022k7i2ukddhyng.png',
				}}
			/>
			<HeroSection />
			<RecentPosts />
			<FeatureWorks />
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
