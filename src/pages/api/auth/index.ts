import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from '@/utils/auth/server';

export default async function handler(req: NextApiRequest, resp: NextApiResponse) {
  const session = getServerSession(req);

  if (!session.success) {
    resp.status(401).json('You must login first');
    return;
  }

  resp.status(200).json(session.data);
}
