import {
	mapState
} from 'vuex'
import DocsService from '../service/docs.js'

export default {
	name: 'doc-comp',

	data: () => ({
		fatalError: '',
		dialog: false,
		player: false,
		youtubeId: '',
		title: '',
		docs: {},
		download: false,
		dialog2: false,
		loading: false,
		expandDesc: {
			bool: false,
			id: null
		}
	}),

	computed: {
		...mapState([
    'isUserLoggedIn',
    'user',
    'gotDocs',
    'allDocs',
    'GenreDocs',
    'gotGenreDocs'

    ]),
	},

	async mounted() {
		try {
			this.fatalError = ''
			this.loading = true
			this.dialog = true
			if (!this.gotDocs) {

				this.docs = (await DocsService.getAll())
					.data

				this.$store.dispatch(
					'setDocs',
					this.docs
				)
			} else {
				this.docs = this.allDocs
				console.log(this.allDocs)
			}

		} catch (e) {
			this.loading = false
			this.fatalError = e.response.data.error;
		} finally {
			this.loading = false
			if (!this.fatalError) {
				this.dialog = false;
			}
		}

	},

	methods: {
		watch(youtubeId, title) {
			try {
				this.youtubeId = youtubeId
				this.title = title
				this.player = true
				this.dialog2 = true

			} catch (e) {
				this.player = false
				this.fatalError = 'something went wrong in the video player...';
				this.dialog = true
			}
		},

		async getByGenres(genres) {
			try {
				console.log("genresDocs", this.GenreDocs)
				console.log("genres.genre", genres.genre)

				if (!(genres.genre in this.GenreDocs)) {
					console.log("here")
					const x = (await DocsService.getAllFromGenre(genres.id))
						.data
					this.docs = x.docs

					this.$store.dispatch(
						'setGenreDocs',
						x
					)
				}
				else {
					const name = genres.genre
					console.log(`${name}=>`, this.GenreDocs[name].docs)
					this.docs = this.GenreDocs[name].docs
				}

			} catch (e) {
				console.log(e)
				this.fatalError = e.response.data.error
				this.dialog = true
			}
		}
	},

	watch: {
		'$route.query.search': {
			immediate: true,
			async handler(value) {
				try {
					this.docs = (await DocsService.getAll(value))
						.data
				} catch (e) {
					this.fatalError = e.response.data.error;
					this.dialog = true

				}
			}
		}
	},

}