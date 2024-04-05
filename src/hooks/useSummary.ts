import { TransactionsContext } from "../pages/transactions/contexts/TransactionContext";
import { useContextSelector } from "use-context-selector";

export function useSummmary() {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
    });

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'income'){
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }
            return acc
        },
        {
            income: 0,
            outcome: 0,
            total: 0
        }
    );

    return summary
}