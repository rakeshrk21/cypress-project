import { getVideoGames } from '../../support/services/videogame.service'

describe('api-test', () => {

    it('get all video games', () => {
        getVideoGames();
    })
})