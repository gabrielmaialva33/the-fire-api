import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { IIssue } from '@modules/sac/interfaces/issue.interfaces';
import {
  IndexIssueService,
  StoreIssueService
} from '@modules/sac/services/issue';

export default class IssuesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const indexIssue = container.resolve(IndexIssueService);
    const issues = await indexIssue.execute();

    return response.json(issues);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const data: IIssue.DTO.Store = request.body;

    const storeIssue = container.resolve(StoreIssueService);
    const issue = await storeIssue.execute(data);

    return response.json(issue);
  }
}
