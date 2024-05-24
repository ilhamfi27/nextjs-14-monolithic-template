import { NextRequest, NextResponse } from 'next/server';

export const ExampleHandler = async (
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse | void> => {
  console.log(`Request: ${req.url}`);
};

export const ExampleHandler1 = async (
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse | void> => {
  console.log('====');
};

export const ExampleHandler2 = async (
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse | void> => {
  console.log('========');
};
