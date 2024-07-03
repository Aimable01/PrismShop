import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { ProductEntity } from 'src/products/entities/product.entity';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async search(@Query('q') query: string): Promise<{ categories: CategoryEntity[], products: ProductEntity[] }> {
    if (!query) {
      return { categories: [], products: [] };
    }
    const results = await this.searchService.search(query);
    return results;
  }
}
