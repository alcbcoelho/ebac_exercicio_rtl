import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve-se inserir dois comentários', () => {
        const comments = [
            'Top',
            'Brabo'
        ];
        
        render(<PostComment />);

        const textarea = screen.getByTestId('textarea');
        const form = screen.getByTestId('form');
        
        comments.forEach(c => {
            fireEvent.change(textarea, {
                target: {
                    value: c
                }
            })
            fireEvent.submit(form)
        });
        comments.forEach(c => {
            expect(screen.getByText(c)).toBeInTheDocument();
        });
    })
});