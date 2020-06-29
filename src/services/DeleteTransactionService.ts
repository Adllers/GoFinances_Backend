import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import Transactionsrepository from '../repositories/TransactionsRepository';



class DeleteTransactionService {
  public async execute(id: string): Promise<void> {

    const transactionsRepository = getCustomRepository(Transactionsrepository);

    const deleteTransaction = await transactionsRepository.findOne(id);

    if (!deleteTransaction) {
      throw new AppError('Transaction does not exists!');
    }

    await transactionsRepository.remove(deleteTransaction);

  }
}

export default DeleteTransactionService;
