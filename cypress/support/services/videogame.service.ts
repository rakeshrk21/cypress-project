import { VideoGame } from "../interfaces/videogame";

export function getVideoGames() {
   return cy.request<VideoGame[]>({
        url: 'https://videogamedb.uk/api/v2/videogame',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
     }).then(resp => {
            expect(resp.status).equal(200);
            expect(resp.body.length).to.be.greaterThan(3);
            const firstGame = resp.body[0];
            expect(firstGame).to.have.property('category');
            const ids: number[] = resp.body.map(games => {
                return games.id
            })
            for( const id of ids) {
                getVideoGameById(id)
            }

        }
     );
}

export async function getVideoGameById(id: number){
    return
    });

    for(const id of ids)

}