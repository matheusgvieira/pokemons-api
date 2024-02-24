import { ApiOperation, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';

export function Documentation(data: Definition) {
  const responses = [];

  data.responses?.forEach(resp => {
    responses.push(
      ApiResponse({
        status: resp.status || 200,
        description: resp.description || 'Success response',
        type: resp.type,
      }),
    );
  });

  return applyDecorators(
    ApiOperation({ summary: data.title, description: data.description }),
    ...responses,
    ApiResponse({
      status: 500,
      description: 'Unexpected error from the service',
      type: InternalServerErrorApiResponse,
    }),
  );
}

type Definition = {
  title: string;
  description?: string;
  responses?: {
    status?: number;
    description?: string;
    type: any;
  }[];
};

class InternalServerErrorApiResponse {
  @ApiProperty({ default: 500 })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  statusCode: number;

  @ApiProperty({ default: 'Internal server error' })
  message: string;
}
