type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <div className="relative flex-1 m-5">
            {children}
        </div>
    );
};

export default PageWrapper;
