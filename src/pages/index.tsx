import { useState } from "react";
import { LevelUpModal } from "../components/awardModal";
import { Box } from "../components/Box";
import { SEO } from "../components/SEO";
import { Container, Wrapper } from "../styles/pages/home";

export default function Home() {
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [category, setCategory] = useState(0);

  function handleCloseAwardModal() {
    setIsLevelUpModalOpen(false);
  }

  function handleOpenAwardModal(category_number: number) {
    setIsLevelUpModalOpen(true);
    setCategory(category_number);
  }

  return (
    <Container>
      <SEO />
      <h1>Prêmio CineStarz</h1>
      <Wrapper>
        <Box>
          <button onClick={() => handleOpenAwardModal(1)}>Melhor Filme</button>
        </Box>
        <Box>
          <button onClick={() => handleOpenAwardModal(2)}>Melhor Ator</button>
        </Box>
        <Box>
          <button onClick={() => handleOpenAwardModal(3)}>Melhor Atriz</button>
        </Box>
        <Box>
          <button onClick={() => handleOpenAwardModal(4)}>Melhor Trilha Sonora</button>
        </Box>
        <Box>
          <button onClick={() => handleOpenAwardModal(5)}>Melhor Animação</button>
        </Box>
        <Box>
          <button onClick={() => handleOpenAwardModal(6)}>Melhor Filme de Careca</button>
        </Box>
        <Box>
          <button onClick={() => handleOpenAwardModal(7)}>Melhor Pior Filme</button>
        </Box>
        <Box>
          <button onClick={() => handleOpenAwardModal(8)}>Melhor &quot;Teu CU&quot;</button>
        </Box>
        <Box>
          <button onClick={() => handleOpenAwardModal(9)}>Melhor Plot Twist</button>
        </Box>
        <Box>
          <button onClick={() => handleOpenAwardModal(11)}>Melhor Nacional</button>
        </Box>
        <Box>
          <button onClick={() => handleOpenAwardModal(10)}>Melhor Pior Ator/Atriz</button>
        </Box>
        <Box>
          <button onClick={() => handleOpenAwardModal(12)}>Melhor Filme do Tarantino</button>
        </Box>
      </Wrapper>
      <LevelUpModal category={category} isOpen={isLevelUpModalOpen} onRequestClose={handleCloseAwardModal} />
    </Container>
  )
}
