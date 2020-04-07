import { text } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
          <div style="width: 800px">
            <pxb-info-list-item [title]="title"></pxb-info-list-item>
          </div>
      `,
    props: {
        title: text('title', 'Info List Item title'),
    },
});
