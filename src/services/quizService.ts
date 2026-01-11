import { supabase } from '../utils/supabaseClient';
import type { Question, UserData } from '../types';

export const quizService = {
    // Fetch questions WITHOUT correct_index
    async getQuestions(subject: 'linear-algebra' | 'calculus'): Promise<Question[] | null> {
        if (!supabase) return null;

        const { data, error } = await supabase
            .from('questions')
            .select('id, text, type, options, subject') // EXPLICITLY exclude correct_index
            .eq('subject', subject);

        if (error) {
            console.error('Error fetching questions:', error);
            return null;
        }

        return data as any as Question[];
    },

    // Submit answers for server-side grading
    async submitQuiz(userData: UserData, answers: Record<number, number>) {
        if (!supabase) return null;

        const { data, error } = await supabase.rpc('submit_quiz', {
            p_name: userData.name,
            p_nim: userData.nim,
            p_class: userData.class,
            p_subject: userData.subject,
            p_answers: answers
        });

        if (error) {
            console.error('Error submitting quiz:', error);
            throw error;
        }

        return data; // Returns { score, passed, correct_count, total_questions }
    }
};
