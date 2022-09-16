interface Props {
  table_id: string;
}

export const AirtableEmbed = ({ table_id }: Props) => {
  return (
    <iframe
      className="airtable-embed"
      src={`https://airtable.com/embed/${table_id}?backgroundColor=purple&viewControls=on`}
      // frameborder="0"
      // onmousewheel=""
      width="100%"
      height="533"
      style={{ background: "transparent; border: 1px solid #ccc;" }}
    />
  );
};
