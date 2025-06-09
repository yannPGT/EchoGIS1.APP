import { describe, it, expect } from 'vitest';
import { parseQuestionsFromText } from '../fileProcessing';

describe('parseQuestionsFromText', () => {
  it('parses simple Q and R format', () => {
    const text = `Q: Quelle est la procédure pour les demandes de congés ?\nR: Les demandes doivent être effectuées via le formulaire dédié au moins 15 jours à l\u0027avance.`;
    const result = parseQuestionsFromText(text);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      question: 'Quelle est la procédure pour les demandes de congés ?',
      answer: 'Les demandes doivent être effectuées via le formulaire dédié au moins 15 jours à l\u0027avance.'
    });
  });

  it('parses Question/Réponse format', () => {
    const text = `Question: Comment accéder aux plannings de service ?\nRéponse: Les plannings sont disponibles sur l\u0027intranet dans la section \"Plannings\".`;
    const result = parseQuestionsFromText(text);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      question: 'Comment accéder aux plannings de service ?',
      answer: 'Les plannings sont disponibles sur l\u0027intranet dans la section "Plannings".'
    });
  });

  it('parses numbered list format', () => {
    const text = `1. Pourquoi le ciel est-il bleu ?\nParce que la lumière se diffuse dans l\u0027atmosphère.\n2. Qu\u0027est-ce que Vitest ?\nVitest est un framework de test rapide pour Vite.`;
    const result = parseQuestionsFromText(text);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      question: 'Pourquoi le ciel est-il bleu ?',
      answer: 'Parce que la lumière se diffuse dans l\u0027atmosphère.'
    });
    expect(result[1]).toEqual({
      question: "Qu'est-ce que Vitest ?",
      answer: 'Vitest est un framework de test rapide pour Vite.'
    });
  });
});
