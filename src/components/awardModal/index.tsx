import { useState } from 'react';
import Modal from 'react-modal';
import { fauna } from "../../service/fauna";
import { query as q } from 'faunadb';

import { Container, Wrapper, Bar, Image, Envelope, Separator } from './styles';

type LevelUpModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  category: number;
}

export type Category = {
  film_title: string;
  votes: number;
  user_indicator_id: string;
  votes_id: string[];
}

export type Award = {
  award: {
    ref: string;
    data: {
      [category: string]: Category[];
    }
  }
}

export function LevelUpModal({ isOpen, onRequestClose, category }: LevelUpModalProps) {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [filmTitle, setFilmTitle] = useState<string>('');

  function handleCloseEnvelope() {
    onRequestClose();
    setIsEnvelopeOpen(false);
  }

  async function handleOpenEnvelope() {
    const awardDatabase = await fauna.query<Award>(
      q.Let(
        {
          ref: q.Match(
            q.Index('award_by_server_id'),
            q.Casefold('877237861638869075')
          ),
        },
        q.If(
          q.Exists(q.Var('ref')),
          {
            type: 'Award',
            award: q.Get(q.Var('ref'))
          },
          {
            type: 'Error',
            message: 'session not found.',
            code: 42
          }
        )
      )
    );

    
    const title = awardDatabase.award.data[`category_${category}`].sort((a, b) => b.votes - a.votes)[0];
    console.log(title);

    setFilmTitle(title.film_title);
    setIsEnvelopeOpen(true);
  }


  return (
    <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {isEnvelopeOpen ? (
        <Envelope>
          <h3>Prêmios <span>Starz</span></h3>
          <Separator />

          <i>&quot;{filmTitle}&quot;</i>

          <button onClick={handleCloseEnvelope}>
            <Image whileHover={{ scale: 1.04 }} src="/logo.svg" alt="Starz-Logo" />
          </button>
        </Envelope>
      ) : (
        <Container>
          <Bar position="left" />
          <Bar position="right" />
          <Wrapper>
            <button onClick={handleOpenEnvelope}>
              <Image whileHover={{ scale: 1.04 }} src="/logo.svg" alt="Starz-Logo" />
            </button>
          </Wrapper>
        </Container>
      )}
    </Modal>
  )
}