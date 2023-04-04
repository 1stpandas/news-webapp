import Button from '@/components/Button'
import Link from 'next/link'

export default function ViewPostPage() {
	return (
		<div className='space-y-6'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-x-4'>
					<img
						className='w-16 h-16 rounded-full'
						src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
						alt='Jese Leos avatar'
					/>
					<div className=''>
						<div className='font-medium dark:text-white'>Jese Leos</div>
						<div>Graphical designer</div>
						<time>20, February 2022</time>
					</div>
				</div>
				<div className='flex gap-2'>
					<Link href='/post/upsert?id=1'>
						<Button>Update</Button>
					</Link>
					<Button color='danger'>Delete</Button>
				</div>
			</div>
			<h3 className='text-3xl font-bold '>
				Lorem veniam pariatur pariatur aliquip sit tempor do exercitation tempor.
			</h3>
			<p>
				Ipsum ea excepteur nisi non quis. Ea voluptate adipisicing aliquip cupidatat
				tempor fugiat ad minim laboris Lorem id. Amet exercitation ad enim magna
				minim proident amet ullamco culpa eu sunt. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Fusce efficitur gravida ultricies. Praesent
				pulvinar ligula dui, eget sodales arcu vestibulum quis. Fusce auctor
				interdum risus a sagittis. Mauris malesuada tempus mollis. Duis finibus,
				nisl et ullamcorper cursus, risus arcu eleifend purus, a tristique ante
				metus a libero. Suspendisse aliquam in nibh nec dictum. Phasellus ultrices
				arcu quis sapien cursus pharetra. Nullam sed ultricies mi. Aliquam massa
				tortor, vulputate quis leo non, feugiat venenatis urna. Vivamus ornare eros
				id justo varius volutpat. Proin vehicula nunc varius magna ultricies, quis
				sodales velit efficitur. Integer ut imperdiet ipsum. Donec nec ex vel orci
				iaculis lacinia sed lacinia eros. Sed efficitur vulputate elit in aliquam.
				Vivamus lobortis leo magna, eu iaculis odio gravida eu. Donec eleifend lacus
				aliquet tortor auctor, eget pretium est tempor. Nullam auctor eget tellus a
				volutpat. Quisque interdum, libero sit amet tincidunt commodo, est lectus
				tincidunt neque, eget lobortis ipsum lacus sed turpis. Pellentesque auctor
				purus a ipsum finibus semper. Mauris ut augue vel urna suscipit fermentum in
				id libero. Donec sit amet iaculis sapien. Aenean in sapien malesuada,
				pulvinar eros id, semper diam. Morbi turpis lectus, vestibulum sed nisl et,
				interdum convallis turpis. Mauris a lobortis ante, eu congue purus.
				Curabitur tempor libero ut elit tempus, a fermentum ex suscipit. Maecenas
				pretium nisi quis justo mattis, sit amet cursus enim cursus. Suspendisse non
				lacus velit. Sed sit amet iaculis justo. Vestibulum ut auctor dui, ac varius
				quam. Quisque congue malesuada orci, ac molestie risus volutpat ac. Vivamus
				id tristique tortor. Aenean tempor tortor tortor, tincidunt mollis ipsum
				accumsan eget. In vulputate cursus massa, in sollicitudin sem hendrerit a.
				Duis auctor at mauris scelerisque bibendum. Fusce efficitur vulputate
				facilisis. Pellentesque cursus ex non est aliquam, ac dignissim enim
				ultrices. Sed felis lectus, ornare id libero et, facilisis pretium felis.
				Sed non imperdiet metus. Donec fringilla sem quam, eu consectetur arcu
				mattis et. Nulla fringilla posuere est sed molestie. Curabitur facilisis
				luctus faucibus. Praesent vel imperdiet eros, eget porta arcu. Pellentesque
				in est libero. Donec in egestas arcu, quis cursus risus. Vestibulum dictum
				eget mi sit amet semper. Proin efficitur orci eget augue ultricies, et
				imperdiet augue varius. Sed nisi odio, pulvinar id ante quis, hendrerit
				suscipit lorem. Integer porta, nisi ut bibendum facilisis, massa dolor
				placerat nisi, hendrerit facilisis arcu eros sit amet ante. Praesent vel
				enim quis velit sodales blandit. Donec pretium dapibus tellus a fringilla.
				Donec feugiat feugiat risus, id hendrerit massa. Suspendisse volutpat
				vestibulum egestas. Ut eget mollis nisi, at dictum neque. Duis vel mi
				iaculis, imperdiet libero ut, facilisis ante. Sed sed porta mauris. Fusce
				condimentum vestibulum porttitor. Ut quis mattis metus. Donec et vehicula
				tellus. Sed dui justo, maximus faucibus orci vel, cursus iaculis enim. Donec
				ac mi pulvinar, porttitor enim id, pulvinar nulla. Maecenas pulvinar metus
				vel diam pretium efficitur. Aliquam ornare eros et lorem facilisis pretium.
				Nulla laoreet consequat fermentum. Duis a ligula mi. Pellentesque ipsum
				ligula, efficitur quis nunc ut, pellentesque condimentum orci. Nam lacinia
				ornare sapien, ac egestas nisi ornare nec. Duis in leo leo. Aenean mollis
				facilisis fermentum. Vestibulum ipsum sem, hendrerit sit amet arcu et,
				laoreet fringilla nisl. Cras vitae nunc volutpat, lacinia erat sit amet,
				iaculis nunc. Praesent dictum egestas nisi, sit amet placerat mauris
				vestibulum vel. Sed rutrum interdum augue at maximus. Morbi porttitor leo et
				elit tristique, non blandit diam lacinia. Aenean vel laoreet ante, ut
				egestas nibh. Vestibulum nec sapien et mauris interdum auctor a vitae est.
				Sed id enim rutrum, varius libero quis, pharetra velit. Sed dapibus, risus
				eget semper scelerisque, tellus enim interdum est, vel commodo ipsum nulla
				pretium leo. Mauris ornare, lectus in eleifend venenatis, lorem risus semper
				enim, gravida maximus purus dolor nec mi. Mauris quis felis feugiat turpis
				lobortis varius. Vivamus non convallis nulla. Ut consectetur varius mauris
				eget gravida. Aliquam finibus gravida nulla, eget ullamcorper orci finibus
				vitae. Duis hendrerit porttitor felis in volutpat. Phasellus pellentesque
				felis a justo mattis, at egestas lectus hendrerit. Cras eu odio interdum,
				mollis tortor at, interdum arcu. Curabitur laoreet lacus leo, eu ultricies
				risus faucibus et. Sed quis luctus tortor, a ultrices enim. Praesent quis
				nibh vulputate, gravida magna vel, tempus ex. Morbi volutpat nec odio ut
				gravida. Sed cursus nunc ullamcorper lobortis finibus. Nulla non sem
				molestie, molestie justo sit amet, sagittis purus. Praesent varius
				pellentesque sem, et sagittis magna pellentesque sit amet. Pellentesque
				maximus dolor mauris, ut pellentesque dui volutpat ut. Pellentesque pharetra
				enim sit amet risus congue, iaculis consequat orci varius. Pellentesque ante
				nulla, posuere in nunc at, auctor congue quam. Donec tristique ex sit amet
				sagittis cursus. Praesent interdum sodales mauris, eu ultricies massa
				tincidunt quis. Maecenas ultricies eros eget massa vehicula, et finibus nisl
				rutrum. Proin ultricies nulla at urna tincidunt egestas. Vestibulum sagittis
				gravida magna id tempus. Vestibulum ante ipsum primis in faucibus orci
				luctus et ultrices posuere cubilia curae; Ut ipsum felis, fermentum et
				dictum sit amet, posuere ut ante. Etiam facilisis enim quis mi condimentum,
				sit amet maximus libero semper. Cras enim elit, elementum vitae vestibulum
				sed, blandit eu metus. Suspendisse potenti. Donec placerat vitae augue nec
				posuere. Maecenas mattis nulla et est cursus, et lacinia sem suscipit.
				Nullam enim est, ultricies ut purus quis, consequat tristique massa. In
				placerat viverra metus vitae venenatis. Suspendisse eleifend nulla bibendum,
				vulputate nisl in, bibendum leo. Morbi semper augue purus, sit amet interdum
				nulla venenatis sit amet. Aenean vitae lobortis odio. Nulla non velit ipsum.
				Suspendisse efficitur ultricies lacinia. Curabitur a augue non est fermentum
				pharetra pellentesque eu magna. Suspendisse potenti. Duis sollicitudin urna
				at ipsum rutrum eleifend. Sed id neque nibh. Donec mattis gravida nibh, at
				auctor neque maximus vitae. Donec lobortis eros a magna imperdiet
				sollicitudin. Fusce luctus elit sit amet blandit sodales. Curabitur volutpat
				venenatis elit, ut fringilla turpis congue at. Vestibulum ante ipsum primis
				in faucibus orci luctus et ultrices posuere cubilia curae; Integer sagittis
				nibh et sapien varius posuere. In hac habitasse platea dictumst. Suspendisse
				porttitor lacinia euismod. Mauris suscipit suscipit magna ac mattis. Nam
				pharetra est ac tempus pulvinar. Cras pellentesque libero egestas ante
				vehicula, vel sagittis felis commodo. Quisque rhoncus dictum lacus, non
				feugiat ante finibus eu. Pellentesque quis neque nec nulla vestibulum
				iaculis id eget lacus. In elit nisl, viverra id nunc at, vulputate consequat
				ante. Cras vel sem sit amet ex sodales efficitur vel eu nunc. Duis convallis
				sodales justo vitae faucibus. Quisque dignissim vel sapien et gravida.
				Pellentesque luctus, ex ac congue eleifend, eros dui porta erat, eget
				vestibulum erat ante eget enim. Integer non risus massa. Donec sodales
				convallis rhoncus. Nulla facilisi. Maecenas ultricies massa sit amet nisi
				euismod, eu facilisis ligula scelerisque. Nullam commodo ornare odio in
				porttitor. Sed porttitor suscipit magna, sit amet lobortis sem suscipit ac.
				Nunc sollicitudin sit amet urna sit amet porttitor. Donec aliquet nisi at
				massa consequat, vel tincidunt est ultrices. Mauris tincidunt, sem sodales
				condimentum bibendum, erat nisl pharetra diam, eu volutpat tortor mi ut
				augue. Mauris nec libero venenatis, imperdiet lacus ac, maximus arcu. Ut
				arcu elit, lobortis id ligula nec, porta sagittis lorem. Aliquam urna nunc,
				finibus id ullamcorper sed, euismod id est. Maecenas rhoncus ultricies
				mattis. Aenean sit amet dignissim tellus, et tristique odio. Etiam elit
				eros, hendrerit sed luctus nec, tempus at eros. Etiam eu pellentesque mi.
				Etiam laoreet luctus magna, eu tempor eros tempus et. Duis vitae iaculis
				sem. Vivamus imperdiet urna id tincidunt luctus. Vestibulum nec laoreet
				lacus. Duis molestie urna lectus, id sollicitudin orci tempor eu. Aenean
				risus libero, posuere feugiat risus at, dignissim ultrices quam. Praesent
				bibendum felis nec arcu accumsan condimentum. In quis nunc non nunc
				fermentum condimentum. Donec sollicitudin turpis non ipsum sollicitudin, non
				placerat justo imperdiet. Donec facilisis in neque sed tincidunt. Aliquam
				aliquam et dui ac auctor. Phasellus semper convallis magna, vel pulvinar
				sapien condimentum at. Fusce quis augue laoreet, mattis enim sit amet,
				fringilla turpis. Nam orci metus, gravida vel gravida in, pellentesque nec
				arcu. In auctor ac enim in sollicitudin. Nullam et magna sapien. Maecenas
				hendrerit mauris id maximus mollis. Praesent lobortis quis metus eget
				pharetra. Morbi tincidunt dictum ligula, et vulputate nisi semper vitae.
				Aenean dui ipsum, malesuada vitae ultricies quis, euismod vitae erat. Donec
				id mauris ut odio lobortis efficitur at at urna. Integer erat nisi, auctor
				vitae dolor ac, molestie sodales elit. Sed nulla nibh, accumsan non suscipit
				eget, varius in orci. Etiam tincidunt libero nec dolor dictum porta. Proin
				elementum purus ante. Praesent vitae commodo ex. Aliquam mi ipsum, ultricies
				ut risus eu, blandit ullamcorper sem. Fusce facilisis sem eget ligula
				pellentesque rutrum. Etiam non est ut urna tristique mattis eu placerat
				tortor. Donec metus leo, varius ac mollis ut, sollicitudin lobortis ex. In
				hac habitasse platea dictumst. Phasellus id sem sed risus convallis posuere.
				Ut accumsan tincidunt orci facilisis sagittis. Curabitur mollis lorem in
				enim suscipit pellentesque. In a enim sed dolor fermentum malesuada. Aliquam
				et vulputate elit. Aenean lorem felis, vestibulum nec pellentesque non,
				rhoncus a neque. Vivamus nulla leo, luctus a velit sed, auctor rutrum arcu.
				Nunc mollis mauris eu auctor consectetur. Sed tellus diam, rutrum sit amet
				dolor vitae, elementum molestie tortor. Sed semper magna sit amet est
				pretium, in iaculis lorem aliquet. Quisque dapibus, est ac pharetra congue,
				massa mauris porttitor massa, a semper risus ex mattis metus. Maecenas eget
				tellus euismod, eleifend odio et, pharetra nisi. Praesent vitae sagittis
				ipsum, nec consequat metus. Vivamus et dolor metus. Fusce pharetra purus vel
				pharetra dapibus. Sed hendrerit, metus vitae bibendum feugiat, ipsum sapien
				venenatis ex, sed suscipit ipsum ipsum ac sapien. Morbi at metus ac sem
				luctus ullamcorper nec consequat odio. Nunc ut elementum orci. Sed et justo
				vitae libero viverra porta. Fusce ut tempus massa. Quisque non ullamcorper
				orci. Donec vel enim bibendum, lobortis justo eget, finibus risus. In lacus
				nisi, convallis imperdiet aliquam ac, commodo ut magna. Aenean condimentum
				nisi vel turpis volutpat, eget tristique augue ornare. Morbi semper
				efficitur justo sed tempor. Donec sit amet ornare orci. In tempus sed tortor
				eu pretium. In ac varius ipsum. Morbi iaculis odio sit amet tortor
				ullamcorper tristique. Nunc vulputate, justo sed suscipit varius, libero
				arcu finibus eros, at porttitor sapien metus vitae risus. Pellentesque
				congue faucibus dui, quis euismod sem vestibulum vitae. Etiam placerat est
				id vestibulum semper. Cras at nulla fringilla, dapibus enim et, auctor
				lectus. Ut ac mollis tellus. Aenean dignissim vestibulum placerat. Sed non
				purus tortor. Suspendisse potenti. Nulla lacinia lorem quis elit sodales
				vulputate. Proin lacinia pulvinar dolor vel mollis. Praesent cursus leo
				turpis, et gravida magna tincidunt molestie. Quisque porttitor nibh lacinia
				fringilla volutpat. Integer vel commodo orci. Orci varius natoque penatibus
				et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
				vulputate sagittis vehicula. Vestibulum faucibus odio euismod placerat
				posuere. Morbi id velit eget nisl dignissim blandit. Aenean ornare eu lectus
				at ullamcorper. Curabitur malesuada accumsan orci, vitae maximus justo
				consequat nec. Nunc a turpis tincidunt, aliquam justo et, lobortis ipsum.
				Integer pretium odio sed mollis pretium. Cras pharetra ullamcorper
				fermentum. Morbi enim felis, imperdiet in sollicitudin eu, semper et nisi.
				Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin pharetra
				nulla non porta ornare. Mauris a purus felis. Nunc felis nulla, hendrerit
				vel rutrum quis, pharetra et elit. Aliquam pellentesque, tellus non vehicula
				euismod, ex ex egestas mauris, eu congue tellus sem lacinia neque. Duis vel
				turpis ex. Ut ut rutrum metus. Cras a elit dignissim, sagittis leo vel,
				condimentum dolor. Donec accumsan lacus ut volutpat commodo. Proin mattis
				ullamcorper ultrices. Nulla gravida eros ut ex blandit, vel luctus ipsum
				porta. Morbi cursus erat et sollicitudin mollis.
			</p>
			<RelatedNews />
		</div>
	)
}

const RelatedNews = () => {
	return (
		<section>
			<h3 className='text-3xl font-bold mb-4'>Related News</h3>
			<div className='grid grid-cols-4 gap-2'>
				<RelatedNewsCard />
				<RelatedNewsCard />
				<RelatedNewsCard />
				<RelatedNewsCard />
			</div>
		</section>
	)
}

const RelatedNewsCard = () => {
	return (
		<article className='space-y-4'>
			<img
				src='https://picsum.photos/550/300'
				alt='post image'
				className='rounded-md'
			/>
			<h4 className='text-2xl font-bold'>
				Consequat aute voluptate aute laboris est est dolore.
			</h4>
			<Link className='hover:text-blue-700 text-blue-500' href='/post/view?id=1'>
				Read More
			</Link>
		</article>
	)
}
