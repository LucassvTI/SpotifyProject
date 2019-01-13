import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="http://concentracaosertaneja.com.br/wp-content/uploads/2017/02/CD-Wesley-Safad%C3%A3o-Promocional-2017.1.jpg"
          alt="Wesley Safadão"
        />
        <strong>Wesley Sertanejo</strong>
        <p>
          Descrição feita para encher linguiça pois está em processo de testes
        </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://concentracaosertaneja.com.br/wp-content/uploads/2017/02/CD-Wesley-Safad%C3%A3o-Promocional-2017.1.jpg"
          alt="Wesley Safadão"
        />
        <strong>Wesley Sertanejo</strong>
        <p>
          Descrição feita para encher linguiça pois está em processo de testes
        </p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
