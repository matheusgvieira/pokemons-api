import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class DocumentationUtils {
  private title = 'Pokemon Api';
  private version = '1';
  private description = `Pokemon API Documentation`;

  async config(app: any) {
    const config = new DocumentBuilder().setTitle(this.title).setDescription(this.description).setVersion(this.version);

    const document = SwaggerModule.createDocument(app, config.build());

    SwaggerModule.setup('/docs', app, document);
  }
}
